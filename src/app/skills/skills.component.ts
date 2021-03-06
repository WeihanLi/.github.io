import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {
  skills = [
  {
    'skillName': 'photoshop',
    'skillScore': 60
  },
  {
    'skillName': 'javascript',
    'skillScore': 80
  },
  {
    'skillName': 'jquery',
    'skillScore': 80
  },
  {
    'skillName': 'html&css',
    'skillScore': 80
  },
  {
    'skillName': 'angularjs',
    'skillScore': 80
  },
  {
    'skillName': 'C#',
    'skillScore': 90
  },
  {
    'skillName': 'Java',
    'skillScore': 60
  },
  {
    'skillName': 'ASP.NET',
    'skillScore': 90
  },
  {
    'skillName': 'SQL Server',
    'skillScore': 80
  },
  {
    'skillName': 'git',
    'skillScore': 80
  },
  {
    'skillName': 'svn',
    'skillScore': 70
  },
  {
    'skillName': 'docker',
    'skillScore': 80
  },
  {
    'skillName': 'k8s',
    'skillScore': 60
  }
];

  constructor() { }

  ngOnInit() {
  }

}
