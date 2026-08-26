import { Component } from '@angular/core';

type OfficeSkill = {
  name: string;
  icon: 'document' | 'word' | 'excel' | 'sheets' | 'research' | 'folder' | 'detail';
};

@Component({
  selector: 'app-office-skills',
  templateUrl: './office-skills.html',
  styleUrl: './office-skills.scss',
})
export class OfficeSkillsComponent {
  protected readonly skills: OfficeSkill[] = [
    { name: 'PDF to Word Conversion', icon: 'document' },
    { name: 'Data Entry', icon: 'excel' },
    { name: 'Copy Typing', icon: 'document' },
    { name: 'Microsoft Word', icon: 'word' },
    { name: 'Microsoft Excel', icon: 'excel' },
    { name: 'Google Sheets / Spreadsheets', icon: 'sheets' },
    { name: 'Document Formatting', icon: 'document' },
    { name: 'Data Cleaning', icon: 'excel' },
    { name: 'Web Research', icon: 'research' },
    { name: 'File Organization', icon: 'folder' },
    { name: 'Attention to Detail', icon: 'detail' },
  ];
}
