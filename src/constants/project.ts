import { Project } from '@/types/data';

export const projects: Project[] = [
  {
    id: 'neuro-launcher',
    title: 'Neuro Launcher',
    date: '2024.06-2024.11',
    about:
      '업무의 생산성을 높여주는 MacOS 용 데스크탑 애플리케이션 (런처) 입니다.',
    details: [
      {
        title: '역할',
        texts: ['프론트엔드 개발 및 성능 개선'],
      },
      {
        title: '팀원',
        texts: ['FE 3명, BE 2명, 마크업 1명, 디자이너 1명, 기획 2명'],
      },
      {
        title: '기술',
        texts: ['Electron, React, TypeScript, Recoil, PNPM'],
      },
    ],
  },
];
