import type { Icon } from './types'

export const IconGlobeStar: Icon = ({
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
      data-slot='icon-ui-globe-star'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.7 11.92c0 5.65 4.57 10.23 10.22 10.23 2.12 0 2.82-.55 3.15-.72v-1.7l-1.5-2.44 2.7-.68 1.46-2.23 1.3 2.23 1.57.68a10.23 10.23 0 1 0-18.9-5.37'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M22.3 12a10.3 10.3 0 1 0-11.23 10.27' stroke='currentColor' />
      <path
        d='M16.37 12c0-5.7-1.96-10.3-4.37-10.3S7.63 6.3 7.63 12c0 4.77 1.56 9.03 3.42 10.2'
        stroke='currentColor'
      />
      <path d='M1.7 12h20.6' stroke='currentColor' />
      <path
        d='m15.75 17.08-.7.11c-.84.14-1.26.2-1.36.5-.1.28.21.59.82 1.2l.5.5c.17.17.26.26.3.37s.01.24-.03.48l-.1.7c-.14.84-.2 1.27.04 1.45s.63-.02 1.4-.4l.62-.33c.22-.1.33-.17.45-.17s.23.06.46.17l.62.32c.76.4 1.15.59 1.4.4.24-.17.17-.6.04-1.45l-.1-.69c-.05-.24-.07-.37-.03-.48s.13-.2.3-.38l.5-.5c.6-.6.9-.9.81-1.2-.1-.29-.52-.35-1.36-.49l-.7-.11c-.24-.04-.36-.06-.46-.13s-.16-.18-.27-.4l-.32-.63c-.39-.76-.58-1.14-.89-1.14-.3 0-.5.38-.89 1.14l-.32.63q-.14.31-.26.4c-.1.07-.22.1-.47.13'
        stroke='currentColor'
      />
    </svg>
  )
}
