import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjA2NCAxNS45NTRjMCAxLjM3My0xLjEzNSAyLjQ4Ni0yLjUzNCAyLjQ4Ni0xLjQgMC0yLjUzNS0xLjExMy0yLjUzNS0yLjQ4NiAwLTEuMzczIDEuMTM1LTIuNDg3IDIuNTM1LTIuNDg3IDEuNCAwIDIuNTM0IDEuMTE0IDIuNTM0IDIuNDg3Wm0tOS4xOTItMy41ODgtMS43NC01LjMxMWMtLjMtLjkxOS0xLjYtLjkxOS0xLjkgMGwtMS43MzkgNS4zMTFhMSAxIDAgMCAwIC45NSAxLjMxMmgzLjQ3OGExIDEgMCAwIDAgLjk1LTEuMzEyWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE1LjQ2OSAxMC43MzdjMS41MS0xLjg1MyA0Ljg2OS0xLjEzNiA0LjY2MyAyLjgzLS4yMDUgMy45NjYuMTQgNC45MDcuMTQgNC45MDdtLTguOTcxLTQuNzk2TDkuNzAzIDguNzk2Yy0uNjI3LTEuOTE1LS45NC0yLjg3My0xLjUyLTIuODczLS41OCAwLS44OTQuOTU4LTEuNTIxIDIuODczbC0xLjU5OCA0Ljg4Mm02LjIzNyAwIDEuNTYgNC43NjJtLTEuNTYtNC43NjNINS4wNjRtLTEuNTYgNC43NjMgMS41Ni00Ljc2M20xNSAyLjI3N2MwIDEuMzczLTEuMTM1IDIuNDg2LTIuNTM0IDIuNDg2LTEuNCAwLTIuNTM1LTEuMTEzLTIuNTM1LTIuNDg2IDAtMS4zNzMgMS4xMzUtMi40ODcgMi41MzUtMi40ODcgMS40IDAgMi41MzQgMS4xMTQgMi41MzQgMi40ODdaIi8+PC9zdmc+)
 */
export const IconTextAa: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-text-aa'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.064 15.954c0 1.373-1.135 2.486-2.534 2.486-1.4 0-2.535-1.113-2.535-2.486 0-1.373 1.135-2.487 2.535-2.487 1.4 0 2.534 1.114 2.534 2.487Zm-9.192-3.588-1.74-5.311c-.3-.919-1.6-.919-1.9 0l-1.739 5.311a1 1 0 0 0 .95 1.312h3.478a1 1 0 0 0 .95-1.312Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15.469 10.737c1.51-1.853 4.869-1.136 4.663 2.83-.205 3.966.14 4.907.14 4.907m-8.971-4.796L9.703 8.796c-.627-1.915-.94-2.873-1.52-2.873-.58 0-.894.958-1.521 2.873l-1.598 4.882m6.237 0 1.56 4.762m-1.56-4.763H5.064m-1.56 4.763 1.56-4.763m15 2.277c0 1.373-1.135 2.486-2.534 2.486-1.4 0-2.535-1.113-2.535-2.486 0-1.373 1.135-2.487 2.535-2.487 1.4 0 2.534 1.114 2.534 2.487Z'
      />
    </svg>
  )
}
