import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import zhCN from "antd/lib/locale-provider/zh_CN";
import { ConfigProvider } from "antd";
import { Spin } from "antd";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <Switch>
          <Route
            exact
            path="/dashboard"
            component={Loadable({
              loader: () => import("@pages/dashboard"),
              loading: () => <Spin />
            })}
          />
          <Redirect to="/dashboard" />
        </Switch>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
