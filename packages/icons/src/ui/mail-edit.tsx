import type { Icon } from './types'

export const IconMailEdit: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-mail-edit'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.75 8.59c0-1.9 0-2.83.59-3.1.58-.27 1.3.35 2.72 1.58l5.63 4.88c.63.54.94.8 1.31.8s.68-.26 1.3-.8l5.64-4.88c1.42-1.23 2.14-1.85 2.72-1.58s.59 1.2.59 3.1v5.01l-1.94-.52-5.58 5.14L14 20H9.75c-3.77 0-5.65 0-6.83-1.17S1.75 15.77 1.75 12z'
        fill='currentColor'
      />
      <path
        d='M10.35 20h-.6c-3.77 0-5.65 0-6.83-1.17S1.75 15.77 1.75 12s0-5.66 1.17-6.83C4.1 4 5.98 4 9.75 4h6.77c1.6 0 2.41 0 3.06.23a4 4 0 0 1 2.44 2.44c.23.65.23 1.45.23 3.05'
        stroke='currentColor'
      />
      <path
        d='m3.34 5.1 4.47 4.5c2 2.02 3 3.03 4.26 3.03 1.24 0 2.25-1 4.25-3.02l4.49-4.5'
        stroke='currentColor'
      />
      <path d='m20.77 16.25-1.79-1.8' stroke='currentColor' />
      <path
        d='M14.14 19.86c-.15.66-.22.99-.04 1.18l.03.03c.19.17.52.1 1.18-.04.55-.12.83-.18 1.07-.3l.03-.02c.24-.13.44-.33.84-.73l4.57-4.48c.32-.31.48-.47.55-.64a1 1 0 0 0 0-.8c-.07-.18-.23-.34-.54-.66-.32-.3-.47-.47-.65-.54a1 1 0 0 0-.8 0 2 2 0 0 0-.64.54l-4.54 4.53c-.4.4-.6.59-.73.83l-.02.04c-.13.24-.2.52-.31 1.06'
        stroke='currentColor'
      />
    </svg>
  )
}
