import { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// import Loading from './loading';
// import Layout from './layout';

/*
사용자가 처음 웹페이지에 진입하면, 번들링된 js파일을 다운받게 되는데,
이때 모든 페이지를 한번에 불러오기 때문에(CSR)
TTV(Time to View, 사용자가 브라우저 내용을 보게되는 시점)과
TTI(Time to Interact, 사용자가 웹 브라우저와 인터렉션 할 수 있는 시점)가 모두 늦어지게 된다.

이를 방지하기 위해 lazy를 사용해 주는 것이다.

lazy 로딩은 번들을 여러 청크로 나눌 수 있게 해준다.
그리고 사용자에게 보여주기위한 청크만 로딩하고 필요할 때만 해당 청크를 불러온다.
*/
const LandingPage = lazy(() => import('@/pages/landing'));
// const SignInPage = lazy(() => import('@pages/sign-in'));
// const SignUpPage = lazy(() => import('@pages/sign-up'));
// const DashBoardPage = lazy(() => import('@pages/dashboard'));
// const DashBoardIdPage = lazy(() => import('@pages/dashboard-id'));
// const DashBoardTestPage = lazy(() => import('@pages/dashboard-test'));
// const ProtectedRoutes = lazy(() => import('@routes/protected-routes'));
// const NotFoundPage = lazy(() => import('@pages/not-found'));
// const MyPage = lazy(() => import('@pages/my-page'));
// const DashboardEdit = lazy(() => import('@pages/dashboard-edit'));

const PrimaryRoute = (
  // <Route path='/' element={<Loading />}>
  <Route path='/'>
    <Route index element={<LandingPage />} />
    {/* <Route element={<ProtectedRoutes authentication={false} />}>
      <Route index element={<LandingPage />} />
      <Route path='sign-in' element={<SignInPage />} />
      <Route path='sign-up' element={<SignUpPage />} />
    </Route>
    <Route element={<ProtectedRoutes authentication={true} />}>
      <Route path='/' element={<Layout />}>
        <Route path='dashboard' element={<DashBoardPage />} />
        <Route path='dashboard/:id' element={<DashBoardIdPage />} />
        <Route path='dashboard/:id/edit' element={<DashboardEdit />} />
        <Route path='dashboard-test' element={<DashBoardTestPage />} />

        <Route path='my-page' element={<MyPage />} />
      </Route>
    </Route>
    <Route path='*' element={<NotFoundPage />} /> */}
  </Route>
);

const baseRoute = createRoutesFromElements(PrimaryRoute);

export const router = createBrowserRouter(baseRoute);
