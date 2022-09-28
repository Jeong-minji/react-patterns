# react-patterns

Study about Advanced React Patterns

## VAC Pattern

- VAC(View Asset Component): 화면에 렌더링되는 JSX + Style을 관리하는 컴포넌트
- VAC 패턴: View 컴포넌트에서 JSX 영역을 VAC로 따로 분리해서 개발하는 설계 방법.<br/>
  JSX 영역을 분리하기 위해서는 View에서 **JSX에 사용되는 값들을 Props Object로 추상화** 해야함.

  ![alt text](/public/images/vac.png)

  <br/>

### VAC Component

VAC 컴포넌트는 stateless한 컴포넌트이므로 스스로 상태를 변경하거나, 외부의 데이터를 받아 오거나, 비즈니스 로직을 갖지 않음. 오직 props로 받아온 내용을 그대로 전달하기만 함.

### Why Use This Pattern

1. 역할에 따른 작업 공간의 분리
   - UI 개발자는 VAC 컴포넌트 부분만, FE 개발자는 View 부분만 수정하면 됨 -> Conflict 감소
2. 렌더링에 직관적인 상태 관리
   - Props Object에서 모든 속성을 정의하여 관리함
   - View는 JSX에 어떻게 상태가 적용되는지, JSX는 어떤 조건이 내려오는지 파악할 필요가 없음

### Props Naming

Props의 네이밍은 데이터 친화적 형태 보다는 렌더링 직관적 형태를 사용하는 것이 좋음. <br/>
ex) `isMin`, `isMax` => `disableDecrease`, `disableIncrease`

또한, 여러 정보를 개별적으로 전달하는 것 보다 조합된 결과를 전달하는 것이 좋음. <br/>

[ from ]

```
// View
props: {
    isLogin: true
    isOwner: false
}

// VAC
{isLogin && isOwner && <button/>}
```

[ to ]

```
// View
props: {
    showButton: isLogin && isOwner
}

// VAC
{showButton && <button/>}
```
