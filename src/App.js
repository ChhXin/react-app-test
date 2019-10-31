import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import zhCN from "antd/lib/locale-provider/zh_CN";
import { ConfigProvider } from "antd";
import { Spin } from "antd";

const Dashboard = lazy(() => import("@pages/dashboard"));
function App() {
  return (
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <Switch>
          <Route
            exact
            path="/dashboard"
            component={props => (
              <Suspense fallback={<Spin />}>
                <Dashboard {...props} />
              </Suspense>
            )}
          />
          <Redirect to="/dashboard" />
        </Switch>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
