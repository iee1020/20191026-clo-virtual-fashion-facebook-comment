# CLO Virtual Fashion - Fackbook 댓글 구현

클로버추얼패션 프론트엔드 개발자 채용 과제 Facebook 댓글 컴포넌트 구현하였습니다.

## 필수 사항

- [x] React, Mobx, Redux와 같은 Framework, Library를 사용하는 이유와 설계 의의를 이해하고 그에 맞게 코드를 작성할 수 있는가
- [x] Application state management를 Mobx 혹은 Redux에 맞게 설계할 수 있는가
- [x] 필요 기능(댓글 입력, 댓글 리스트, 댓글 좋아요, 댓글 삭제) 이외의 기능은 불필요합니다.
- [x] CSS(비슷하게만 구현, SASS 사용 가능)
- [x] DB는 localStorage 사용

## Getting Started

- 가장 상위 Root Js 파일의 바로 하위는 `src/components/App.js`부터 시작합니다.
- style의 경우 각 컴포넌트 별로 `src/components/styles/...`에 적용 되어있으며 각각의 style은 `src/components/App.scss`에서 `@import` 되어있습니다. `src/components/App.scss`는 `src/components/App.js`에서 불러옵니다.
  redux가 적용 된 컴포넌트는 따로 `src/containers/...`로 분리 되어있습니다.
- `src/store/modules/crudComment.js`는 action과 reducer를 하나의 파일에 모두 작성한 Ducks 구조로 이루어져있습니다.
- 현재 reducer는 하나밖에 없지만 실제 프로젝트는 여러개의 reducer가 존재하므로 여러개의 reducer를 합치는 기능을 위해 root reducer `src/store/modules/index.js`를 만들었습니다.
- `src/store/configure.js`는 store를 만드는 함수 입니다.
- `src/store/index.js`는 store를 만드는 함수를 사용하여 내보내는 역할을 가집니다.

### Prerequisites

프로젝트 시작전 설정 및 실행 방법 입니다. 아래의 코드를 터미널에서 실행합니다.

**Installing**

```
yarn install
```

**Start**

```
yarn start
```

### And repeat

`node_module`이 이미 있다면 확인을 위해 아래의 코드만 터미널에서 실행합니다.

```
yarn start
```

## Built With

- [React](https://ko.reactjs.org/) - 기본 라이브러리
- [Redux](https://redux.js.org/)
- [Sass](https://sass-lang.com/)
- [immutable](https://www.npmjs.com/package/immutable) - React 불변함 유지 모듈
