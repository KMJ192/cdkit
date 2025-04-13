# Component Develop-kit 패키지 워크스페이스

- UI 라이브러리
- UI Documents 페이지
- React 패키지

### Getting start

- UI

```
yarn add @cdkit/react-ui
```

- Modules

```
yarn add @cdkit/react-modules
```

### Library Package build

- Modules

```
yarn workspace @cdkit/react-modules build
```

- UI

```
yarn workspace @cdkit/react-ui build
```

### App start

- Documents
  - @cdkit/react-modules와 @cdkit/react-ui를 순서대로 빌드해주세요.

```
yarn workspace @cdkit/documents start
```

### dev

- Yarn Workspace
- React(v18)
- NextJS(13)
- Typescript
- Rollup
- Vite
- sass
- pnpm

##### git commit message

- 액션(프로젝트): 커밋 내용

- 프로젝트

```
workspace
react-ui
react-modules
documents
```

- 액션

```
feat: 기능 추가, 삭제, 변경 (코드 수정)
fix: 버그 수정
type: 코드 형식 변경
refactor: 코드 리팩토링
docs: 코드 외 문서의 추가, 삭제, 변경
test: 테스트 코드 추가, 삭제, 변경
build: 빌드 옵션 변경
etc: 위 해당 사항이 없는 모든 변경 사항
```
