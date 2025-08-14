export type GuideLink = { label: string; url: string };
export type Milestone = {
  date: string; // ISO (local timezone display)
  type: '官方' | '內部';
  titleZh: string;
  titleEn: string;
  noteZh?: string;
  noteEn?: string;
  links?: GuideLink[];
};

export const SCHEDULE: Milestone[] = [
  // 內部事前（可依你們隊內調整）
  { date: '2025-08-20', type: '內部', titleZh: 'Kickoff 會議', titleEn: 'Team Kickoff', noteZh: '確認人員／工具／資料清單', noteEn: 'Confirm roster, tools, data sources' },

  // ＝ 你指定要加入的官方節點（中英＋連結）＝
  {
    date: '2025-08-21',
    type: '官方',
    titleZh: '挑戰摘要釋出、開放組隊；組隊指南發布',
    titleEn: 'Challenge Summaries available; Team Formation opens; Team Formation Guide available',
    links: [
      { label: 'Team Formation Participant Guide', url: 'https://www.spaceappschallenge.org/resources/team-formation-guide/' }
    ]
  },
  {
    date: '2025-09-16',
    type: '官方',
    titleZh: '完整挑戰說明發布',
    titleEn: 'Challenge Statements available'
  },
  {
    date: '2025-09-23',
    type: '官方',
    titleZh: 'Space Apps Connect 開放；操作指南發布',
    titleEn: 'Space Apps Connect opens; Participant Guide available',
    links: [
      { label: 'Space Apps Connect Participant Guide', url: 'https://www.spaceappschallenge.org/resources/space-app-connect-guide/' }
    ]
  },
  {
    date: '2025-10-03',
    type: '官方',
    titleZh: 'Global Offers 公布；專案提交與評審指南發布',
    titleEn: 'Global Offers available; Project Submission & Judging/Awards Guides available',
    links: [
      { label: 'Project Submission Guide', url: 'https://www.spaceappschallenge.org/resources/project-submission-guide/' },
      { label: 'Judging & Awards Guide', url: 'https://www.spaceappschallenge.org/resources/judging-awards-guide/' }
    ]
  },
  {
    date: '2025-10-04',
    type: '官方',
    titleZh: 'NASA Space Apps Challenge 活動日（Day 1）',
    titleEn: 'NASA Space Apps Challenge (Day 1)'
  },
  {
    date: '2025-10-05',
    type: '官方',
    titleZh: 'NASA Space Apps Challenge 活動日（Day 2）／提交',
    titleEn: 'NASA Space Apps Challenge (Day 2) / Submission'
  },

  // 內部節點（例）
  { date: '2025-09-07', type: '內部', titleZh: '題目定稿', titleEn: 'Finalize challenge & scope' },
  { date: '2025-09-15', type: '內部', titleZh: '素材鎖定', titleEn: 'Lock data fields & assets' }
];
