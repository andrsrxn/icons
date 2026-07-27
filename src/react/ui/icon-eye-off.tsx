import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE0Ljc3MyAxMmEyLjc3MyAyLjc3MyAwIDEgMS01LjU0NiAwIDIuNzczIDIuNzczIDAgMCAxIDUuNTQ2IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjAuMDE2IDIwLjAxNiAzLjk4NCAzLjk4NG0uMTEgNi44NDJDNS42MTQgOS4zNDggOC41NyA3IDEyIDdjMy40MyAwIDYuMzg2IDIuMzQ4IDcuOTA2IDMuODI2LjY3My42NTQuNjcgMS42OTItLjAwNCAyLjM0NEMxOC4zNzQgMTQuNjQ4IDE1LjQwNyAxNyAxMiAxN3MtNi4zNzQtMi4zNTItNy45MDItMy44M2ExLjYxMiAxLjYxMiAwIDAgMS0uMDA0LTIuMzQ0Wk0xNC43NzMgMTJhMi43NzMgMi43NzMgMCAxIDEtNS41NDYgMCAyLjc3MyAyLjc3MyAwIDAgMSA1LjU0NiAwWiIvPjwvc3ZnPg==)
 */
export const IconEyeOff: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-eye-off'
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
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.016 20.016 3.984 3.984m.11 6.842C5.614 9.348 8.57 7 12 7c3.43 0 6.386 2.348 7.906 3.826.673.654.67 1.692-.004 2.344C18.374 14.648 15.407 17 12 17s-6.374-2.352-7.902-3.83a1.612 1.612 0 0 1-.004-2.344ZM14.773 12a2.773 2.773 0 1 1-5.546 0 2.773 2.773 0 0 1 5.546 0Z'
      />
    </svg>
  )
}
