const header = {
  name: "박제영",
  desc: "프론트엔드 개발자",
};

const contact = {
  subject: "Contact",
  email: "parkjeyoung85@gmail.com",
  mobile: "010-3476-4438",
};

const introduction = {
  subject: "Introduction",
  desc1:
    "SPA 웹 포트폴리오를 두 번 진행해보았고 팀장의 역할을 맡았습니다. 두 프로젝트 모두 일정 내에 마무리를 지을 수 있도록 책임을 다했습니다. 프론트와 백엔드 모두 흥미를 느끼지만, 프론트엔드에 좀 더 자신감이 있습니다. 특히 UI 컴포넌트 만드는 것을 잘합니다.",
  desc2:
    "담당한 업무의 결과물을 다듬는 걸 좋아합니다. 부여된 업무만 마치는 것보다는 어떻게 하면 더 편하게 쓸지 어떻게 하면 같은 팀원들이 이 컴포넌트를 더 쉽게 사용할 수 있을까 하는 능동적인 고민을 하는 것이 본인의 성장에 도움이 된다고 느낍니다.",
};

const skills = {
  subject: "Skills",
  contents: [
    {
      category: "[프론트 엔드]",
      desc: ["React", "HTML", "CSS", "JavaScript", "Zustand", "Redux", "Styled-Components"],
    },
    {
      category: "[백 엔드]",
      desc: ["Node.js", "Express.js", "Jwt", "Cookie", "Session", "Mysql"],
    },
    {
      category: "[배포]",
      desc: ["Aws Ec2", "S3", "RDS", "CouldFront", "Route53"],
    },
    {
      category: "[기타]",
      desc: ["Git (Git hub)", "VS Code"],
    },
  ],
};

const portfolio = {
  subject: "Portfolio",
  contents: [
    {
      leftSection: {
        period: "2022.03 - 2022.04",
        institution: "코드스테이츠",
        order: "파이널 프로젝트",
        setup: "(3인/4주)",
      },

      rightSection: {
        title: "프로젝트 이름: Budbuddy",
        subtitle: "한 줄 소개: 반려식물 관리 웹앱",
        url: "https://budbuddy.click/",
        github: "https://github.com/codestates/budbuddy",
        prototype: "https://app.moqups.com/bvuGdqxY3AbobvwrHNKNJZIGfAkDbcW0/view/page/ad64222d5",
        role: "[팀장,프론트엔드]",
        skills: "React, Zustand, Styled-Components, Cookie, Jwt",
        part: "프로젝트에서 맡은 부분 (프론트엔드 기여도 90% 백엔드 기여도 5%)",
        desc: [
          {
            li: "UI 컴포넌트 (DatePicker / 이미지 슬라이드 / 모든 예외처리 모달 / 네비게이션바 / 슬라이드바)",
            subli: "- 라이브러리를 사용하지 않고 직접 구현",
          },
          {
            li: "게시판 CRUD, 댓글 및 대댓글 구현, 게시판 검색기능",
            subli: null,
          },
          {
            li: "홈 / 로그인 / 회원가입 / 일지작성 / 일지목록 / 스토리 / 마이페이지를 담당",
            subli: "- 회원 가입 / 로그인은 백엔드 포함",
          },
          {
            li: "명언 문구 일정 시간 자동 반복 갱신 (setInterval을 선언적으로 사용해 리렌더링 방지)",
            subli: null,
          },
          {
            li: "쿼리 인코딩하여 페이지 라우팅 (useNavigateSearch hook 사용)",
            subli: null,
          },
        ],
      },
    },

    {
      leftSection: {
        period: "2022.02 - 2022.02",
        institution: "코드스테이츠",
        order: "퍼스트 프로젝트",
        setup: "(4인/2주)",
      },

      rightSection: {
        title: "프로젝트 이름: LolInfo",
        subtitle: "한 줄 소개: 롤 전적 검색 사이트",
        url: "https://budbuddy.click/",
        github: "https://github.com/codestates/budbuddy",
        prototype: "https://app.moqups.com/bvuGdqxY3AbobvwrHNKNJZIGfAkDbcW0/view/page/ad64222d5",
        role: "[팀장,프론트엔드]",
        skills: "React, Redux, Styled-Components, D3.js",
        part: "프로젝트에서 맡은 부분 (프론트엔드 기여도 30% 백엔드 기여도 10%)",
        desc: [
          {
            li: "전적페이지",
            subli: null,
          },
          {
            li: "승률 원형 그래프 / 가로 세로 막대 그래프 (d3.js사용)",
            subli: null,
          },
          {
            li: "Aws 이용한 https 배포",
            subli: null,
          },
        ],
      },
    },
  ],
};

const data = new Map([
  ["header", header],
  ["contact", contact],
  ["introduction", introduction],
  ["skills", skills],
  ["portfolio", portfolio],
]);

export default data;
