import type { Icon } from './types'

export const IconPiggyBank: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-piggy-bank'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.66 12.02v1.72a3.5 3.5 0 0 0 3.51 3.52v1.82c0 .5.42.92.92.92h.83c.76 0 1.37-.61 1.37-1.37s.61-1.37 1.37-1.37h1.48c.76 0 1.37.61 1.37 1.37S13.12 20 13.88 20h.42c.75 0 1.37-.61 1.37-1.37s.63-1.34 1.33-1.62a4 4 0 0 0 2.09-2.15c.31-.7.95-1.25 1.7-1.25.86 0 1.55-.7 1.55-1.55v-.67c0-.8-.64-1.43-1.43-1.43s-1.38-.69-1.76-1.38c-.73-1.32-2.48-1.75-3.47-1.78l-.01-.02v-.94c0-1.76-1.62-2.86-2.5-1.33-.75 1.28-1.96 2.29-3.45 2.29H6.88a5.2 5.2 0 0 0-5.22 5.22'
        fill='currentColor'
      />
      <path
        d='M1.66 12.02v1.73a3.5 3.5 0 0 0 3.5 3.5l.01.01v2.05c0 .38.31.69.7.69h1.71a1 1 0 0 0 .91-.92v-.45c0-.34 0-.52.05-.66a1 1 0 0 1 .67-.67c.14-.04.31-.04.65-.04h1.05c.35 0 .52 0 .66.04a1 1 0 0 1 .67.67c.04.14.04.32.04.66s0 .52.05.66a1 1 0 0 0 .67.67c.14.04.31.04.65.04h.65c.34 0 .51 0 .65-.04a1 1 0 0 0 .67-.67c.05-.14.05-.32.05-.66s0-.51.02-.62c.07-.33.13-.42.4-.6.1-.07.37-.18.91-.4a4 4 0 0 0 2.09-2.15c.31-.7.95-1.25 1.7-1.25.86 0 1.55-.7 1.55-1.55v-.67c0-.8-.64-1.43-1.43-1.43s-1.38-.69-1.76-1.38c-.73-1.32-2.48-1.75-3.47-1.78l-.01-.02v-.94c0-1.76-1.62-2.86-2.5-1.33-.75 1.28-1.96 2.29-3.45 2.29H6.88a5.2 5.2 0 0 0-5.22 5.22'
        stroke='currentColor'
      />
      <circle
        cx='15.44'
        cy='10.43'
        r='.5'
        transform='rotate(90 15.44 10.43)'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M5.82 10.25c.53-.17.83-.24 1.38-.32 1.03-.15 2.67 0 2.67 0' stroke='currentColor' />
    </svg>
  )
}
