import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTE2Ljg2IDE3LjU0My0zLjIzMyAyLjZhMSAxIDAgMCAxLTEuNjI3LS43OFY0LjU1MmExIDEgMCAwIDEgMS42MS0uNzkybDMuMjMzIDIuNDlhMSAxIDAgMCAxIC4wNCAxLjU1MkwxMiAxMS45ODVsNC44NjkgNC4wMDZhMSAxIDAgMCAxLS4wMDkgMS41NTJaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtNS43NyA3LjIxIDYuMjc1IDQuNzk4bTAgMCA0LjEyMyAzLjE1Yy45NDguNzI2IDEuNDIyIDEuMDg4IDEuNDI0IDEuNTguMDAyLjQ5Mi0uNDY5Ljg1OC0xLjQxMiAxLjU5bC0uOTA4LjcwNWMtMS40MDQgMS4wOS0yLjEwNiAxLjYzNi0yLjY2NyAxLjM2MS0uNTYtLjI3NC0uNTYtMS4xNjMtLjU2LTIuOTR2LTUuNDQ3Wm0tNi4yNzUgNC43OCA2LjI3Ni00Ljc5N20wIDAgNC4xMjMtMy4xNWMuOTQ4LS43MjYgMS40MjItMS4wODggMS40MjQtMS41OC4wMDItLjQ5Mi0uNDY5LS44NTgtMS40MTItMS41OWwtLjkwOC0uNzA1Yy0xLjQwNC0xLjA5LTIuMTA2LTEuNjM2LTIuNjY3LTEuMzYxLS41Ni4yNzQtLjU2IDEuMTYzLS41NiAyLjk0djUuNDQ2WiIvPjwvc3ZnPg==)
 */
export const IconBluetooth: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-bluetooth'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m16.86 17.543-3.233 2.6a1 1 0 0 1-1.627-.78V4.552a1 1 0 0 1 1.61-.792l3.233 2.49a1 1 0 0 1 .04 1.552L12 11.985l4.869 4.006a1 1 0 0 1-.009 1.552Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m5.77 7.21 6.275 4.798m0 0 4.123 3.15c.948.726 1.422 1.088 1.424 1.58.002.492-.469.858-1.412 1.59l-.908.705c-1.404 1.09-2.106 1.636-2.667 1.361-.56-.274-.56-1.163-.56-2.94v-5.447Zm-6.275 4.78 6.276-4.797m0 0 4.123-3.15c.948-.726 1.422-1.088 1.424-1.58.002-.492-.469-.858-1.412-1.59l-.908-.705c-1.404-1.09-2.106-1.636-2.667-1.361-.56.274-.56 1.163-.56 2.94v5.446Z'
      />
    </svg>
  )
}
