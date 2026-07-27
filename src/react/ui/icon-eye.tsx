import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE0Ljc3MyAxMmEyLjc3MyAyLjc3MyAwIDEgMS01LjU0NiAwIDIuNzczIDIuNzczIDAgMCAxIDUuNTQ2IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyIDdjLTMuNDMgMC02LjM4NiAyLjM0OC03LjkwNiAzLjgyNmExLjYxMiAxLjYxMiAwIDAgMCAuMDA0IDIuMzQ0QzUuNjI2IDE0LjY0OCA4LjU5MyAxNyAxMiAxN3M2LjM3NC0yLjM1MiA3LjkwMi0zLjgzYy42NzQtLjY1Mi42NzctMS42OS4wMDQtMi4zNDRDMTguMzg2IDkuMzQ4IDE1LjQzIDcgMTIgN1oiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC43NzMgMTJhMi43NzMgMi43NzMgMCAxIDEtNS41NDYgMCAyLjc3MyAyLjc3MyAwIDAgMSA1LjU0NiAwWiIvPjwvc3ZnPg==)
 */
export const IconEye: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-eye'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M14.773 12a2.773 2.773 0 1 1-5.546 0 2.773 2.773 0 0 1 5.546 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12 7c-3.43 0-6.386 2.348-7.906 3.826a1.612 1.612 0 0 0 .004 2.344C5.626 14.648 8.593 17 12 17s6.374-2.352 7.902-3.83c.674-.652.677-1.69.004-2.344C18.386 9.348 15.43 7 12 7Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M14.773 12a2.773 2.773 0 1 1-5.546 0 2.773 2.773 0 0 1 5.546 0Z'
      />
    </svg>
  )
}
