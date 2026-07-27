import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQuOTg4IDEyLjU1NWMwLTEuODg2IDAtMi44MjkuNTg1LTMuNDE0LjU4Ni0uNTg2IDEuNTI5LS41ODYgMy40MTUtLjU4Nmg2LjAwNGMxLjg4NiAwIDIuODI4IDAgMy40MTQuNTg2LjU4Ni41ODUuNTg2IDEuNTI4LjU4NiAzLjQxNHYyLjgwOWMwIDEuODg2IDAgMi44MjgtLjU4NiAzLjQxNC0uNTg1LjU4Ni0xLjUyOC41ODYtMy40MTQuNTg2SDguOTg4Yy0xLjg4NiAwLTIuODI5IDAtMy40MTUtLjU4Ni0uNTg1LS41ODYtLjU4NS0xLjUyOC0uNTg1LTMuNDE0di0yLjgxWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE4Ljk5NiA4LjUzOHY2LjgyNmMwIDEuODg2IDAgMi44MjgtLjU4NiAzLjQxNC0uNTg2LjU4Ni0xLjUyOS41ODYtMy40MTQuNTg2SDkuMDA0Yy0xLjg4NSAwLTIuODI4IDAtMy40MTQtLjU4Ni0uNTg2LS41ODYtLjU4Ni0xLjUyOC0uNTg2LTMuNDE0VjguNTM4bTEzLjk5MiAwSDUuMDA0bTEzLjk5MiAwYy41NDItLjEzMyAxLjEyNC0uNTgzIDEuMjU3LTEuMTI2LjA0My0uMTc2LjA0My0uMzkuMDQzLS44MTcgMC0uNDI3IDAtLjY0LS4wNDMtLjgxNmExLjUgMS41IDAgMCAwLTEuMS0xLjFjLS4xNzYtLjA0My0uMzktLjA0My0uODE2LS4wNDNINS42NjNjLS40MjcgMC0uNjQgMC0uODE2LjA0M2ExLjUgMS41IDAgMCAwLTEuMSAxLjFjLS4wNDMuMTc2LS4wNDMuMzktLjA0My44MTYgMCAuNDI4IDAgLjY0MS4wNDMuODE3LjEzMy41NDMuNzE1Ljk5MyAxLjI1NyAxLjEyNm0zLjc0IDIuOTU2aDYuNTEzIi8+PC9zdmc+)
 */
export const IconArchive: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-archive'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M4.988 12.555c0-1.886 0-2.829.585-3.414.586-.586 1.529-.586 3.415-.586h6.004c1.886 0 2.828 0 3.414.586.586.585.586 1.528.586 3.414v2.809c0 1.886 0 2.828-.586 3.414-.585.586-1.528.586-3.414.586H8.988c-1.886 0-2.829 0-3.415-.586-.585-.586-.585-1.528-.585-3.414v-2.81Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M18.996 8.538v6.826c0 1.886 0 2.828-.586 3.414-.586.586-1.529.586-3.414.586H9.004c-1.885 0-2.828 0-3.414-.586-.586-.586-.586-1.528-.586-3.414V8.538m13.992 0H5.004m13.992 0c.542-.133 1.124-.583 1.257-1.126.043-.176.043-.39.043-.817 0-.427 0-.64-.043-.816a1.5 1.5 0 0 0-1.1-1.1c-.176-.043-.39-.043-.816-.043H5.663c-.427 0-.64 0-.816.043a1.5 1.5 0 0 0-1.1 1.1c-.043.176-.043.39-.043.816 0 .428 0 .641.043.817.133.543.715.993 1.257 1.126m3.74 2.956h6.513'
      />
    </svg>
  )
}
