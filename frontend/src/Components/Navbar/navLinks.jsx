import { classNames } from '../../utils/classNames'

const NavLinks = ({ navigation }) => {
  return (
    <div className="hidden sm:ml-6 sm:flex sm:flex-col sm:justify-center sm:items-center">
      <div className="flex space-x-4 ">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
              item.current ? 'bg-gray-900 text-[var(--primary)] font-bold' : 'text-[var(--primary)] hover:bg-gray-600 hover:text-white',
              ' px-4 py-[38px] text-xl font-bold'
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
