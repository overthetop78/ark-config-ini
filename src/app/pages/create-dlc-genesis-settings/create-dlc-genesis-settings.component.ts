import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DLCGenesisSettingsStorageService } from 'src/app/services/dlc-genesis-settings-storage.service';
import { DLC_GENESIS_SETTINGS } from 'src/app/utils/constants/settings/dlc-genesis-settings';
import { DlcGenesisSettingsTextGenerator } from 'src/app/utils/functions/dlc-genesis-settings-text-generator';

@Component({
  selector: 'app-create-dlc-genesis-settings',
  templateUrl: './create-dlc-genesis-settings.component.html',
  styleUrls: ['./create-dlc-genesis-settings.component.scss']
})
export class CreateDlcGenesisSettingsComponent implements OnInit {
  dlcGenesisSettingsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private DlcGenesisSettingsStorageService: DLCGenesisSettingsStorageService,
    private DlcGenesisSettingsTextGenerator: DlcGenesisSettingsTextGenerator
  ) { }

  ngOnInit(): void {
    this.dlcGenesisSettingsForm = this.fb.group({
      settings: this.fb.array(
        DLC_GENESIS_SETTINGS.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.defaultValue, [Validators.required]],
            description: [setting.description]
          })
        )
      )
    });

    this.loadDlcGenesisSettingsData();
  }

  get settingControls() {
    return (this.dlcGenesisSettingsForm.get('settings') as FormArray).controls;
  }

  onSubmit(): void {
    const DlcGenesisSettingsData = this.dlcGenesisSettingsForm.value.settings;
    this.DlcGenesisSettingsStorageService.setDLCGenesisSettingsData(DlcGenesisSettingsData);
    this.DlcGenesisSettingsTextGenerator.generateText();
  }

  loadDlcGenesisSettingsData(): void {
    const savedData: { nameFr: string, key: string, value: any, description: string }[] = this.DlcGenesisSettingsStorageService.getDLCGenesisSettingsData();
    if (savedData && savedData.length > 0) {
      this.dlcGenesisSettingsForm.setControl('settings', this.fb.array(
        savedData.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.value, [Validators.required]],
            description: [setting.description]
          })
        )
      ));
    }
  }

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  onBooleanChange(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const formArray = this.dlcGenesisSettingsForm.get('settings') as FormArray;
    formArray.at(index).get('value')?.setValue(input.checked);
  }
}
