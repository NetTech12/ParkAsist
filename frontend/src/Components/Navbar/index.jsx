import { Disclosure, DisclosurePanel } from '@headlessui/react'
import MobileMenuButton from './mobileMenuButton'
import NavLinks from './navLinks'
import logo from '../../assets/logo.png'
import { classNames } from '../../utils/classNames'

const navigation = [
  { name: 'ANASAYFA', href: '/home', current: false },
  { name: 'OTOPARKLAR', href: '/carpark', current: false },
]

const Navbar = () => {
  return (
    <Disclosure  as="nav">
      <div className="bg-white  py-6 mx-auto shadow-sm px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <MobileMenuButton />

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <a  href='/home'>
              <img alt="ParkAsist" src={logo} className="h-18 w-auto" />

              </a>
            </div>
            {/* NavLinks bileşenine navigation dizisini prop olarak geçiriyoruz */}
            <NavLinks navigation={navigation} />
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Bildirim ve kullanıcı menüsü buraya eklenebilir */}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'text-gray-500 font-bold' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-lg font-bold'
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Navbar
