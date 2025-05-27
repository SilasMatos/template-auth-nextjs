import * as React from 'react'

import { SearchForm } from '@/components/search-form'
import { VersionSwitcher } from '@/components/version-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from '@/components/ui/sidebar'

const data = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      items: [
        { title: 'Overview', url: '/dashboard/overview' },
        { title: 'Analytics', url: '/dashboard/analytics' }
      ]
    },
    {
      title: 'Orders',
      url: '/orders',
      items: [
        { title: 'All Orders', url: '/orders' },
        { title: 'Pending', url: '/orders/pending' },
        { title: 'Completed', url: '/orders/completed' }
      ]
    },
    {
      title: 'Products',
      url: '/products',
      items: [
        { title: 'All Products', url: '/products' },
        { title: 'Add Product', url: '/products/new' },
        { title: 'Categories', url: '/products/categories' }
      ]
    },
    {
      title: 'Customers',
      url: '/customers',
      items: [
        { title: 'All Customers', url: '/customers' },
        { title: 'New Customer', url: '/customers/new' }
      ]
    },
    {
      title: 'Reports',
      url: '/reports',
      items: [
        { title: 'Sales Report', url: '/reports/sales' },
        { title: 'Inventory Report', url: '/reports/inventory' }
      ]
    },
    {
      title: 'Settings',
      url: '/settings',
      items: [
        { title: 'Profile', url: '/settings/profile' },
        { title: 'Store Info', url: '/settings/store' },
        { title: 'User Management', url: '/settings/users' }
      ]
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map(item => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
