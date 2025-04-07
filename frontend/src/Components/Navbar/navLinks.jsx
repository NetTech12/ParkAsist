import { classNames } from '../../utils/classNames'

const NavLinks = ({ navigation }) => {
  return (
    <div className="hidden ml-2 lg:ml-4 md:flex md:flex-col md:justify-center md:items-center">
      <div className="flex ">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
              item.current ? 'bg-gray-900 text-[var(--primary)] font-bold   ' : 'text-[var(--primary)] hover:bg-gray-600 hover:text-white hover:rounded-md dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-gray-500',
              ' px-[6px] lg:px-5  py-[34px] text-lg font-bold dark:text-white  '
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default NavLinks
