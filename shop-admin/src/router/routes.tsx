import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Products from '../components/products/Products'
import EditProduct from '../components/products/EditProduct'
import Categories from '../components/categories/Categories'
import EditCategory from '../components/categories/EditCategory'
import Orders from '../components/orders/Orders'
import OrderDetails from '../components/orders/OrderDetails'
import Payments from '../components/payment/Payments'
import PaymentDetails from '../components/payment/PaymentDetails'
import Coupons from '../components/coupons/Coupons'
import NewCoupon from './../components/coupons/NewCoupon';
import Settings from './../components/settings/Settings';
import NewSetting from './../components/settings/NewSetting';


interface RouteItem {
  path: string;
  component: any;
}

const routes: RouteItem[] = [
  {
    path: '/products',
    component: Products
  },
  {
    path: '/products/edit',
    component: EditProduct
  },
  {
    path: '/categories',
    component: Categories
  },
  {
    path: '/categories/edit',
    component: EditCategory
  },
  {
    path: '/orders',
    component: Orders
  },
  {
    path: '/orders/:orderID',
    component: OrderDetails
  },
  {
    path: '/payments',
    component: Payments
  },
  {
    path: '/payments/:paymentID',
    component: PaymentDetails
  },
  {
    path: '/coupons',
    component: Coupons
  },
  {
    path: '/coupons/new',
    component: NewCoupon
  },
  {
    path: '/settings',
    component: Settings
  },
  {
    path: '/settings/new',
    component: NewSetting
  }
]
const RenderRoutes = () => {
  return (
    <Switch>
      {
        routes.map((route: RouteItem, i) => (
          <Route exact key={i} path={route.path} component={route.component} />
        ))
      }
    </Switch>
  )
}
export default RenderRoutes
