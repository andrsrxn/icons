import type { Icon } from './types'

export const IconOctagon: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='octagon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14.6 3.77c.43 0 .64 0 .83.09.2.08.35.23.65.53l3.58 3.63c.3.3.45.46.53.65.08.2.07.4.07.84l-.03 5.09c0 .43 0 .64-.09.83-.08.2-.23.35-.53.65l-3.63 3.58c-.3.3-.46.45-.65.53-.2.08-.4.07-.84.07l-5.09-.03c-.43 0-.64 0-.83-.09-.2-.08-.35-.23-.65-.53l-3.58-3.63c-.3-.3-.45-.46-.53-.65-.08-.2-.07-.4-.07-.84l.03-5.09c0-.43 0-.64.09-.83.08-.2.23-.35.53-.65l3.63-3.58c.3-.3.46-.45.65-.53.2-.08.4-.07.84-.07z'
        fill='currentColor'
      />
      <path
        d='M14.6 3.77c.43 0 .64 0 .83.09.2.08.35.23.65.53l3.58 3.63c.3.3.45.46.53.65.08.2.07.4.07.84l-.03 5.09c0 .43 0 .64-.09.83-.08.2-.23.35-.53.65l-3.63 3.58c-.3.3-.46.45-.65.53-.2.08-.4.07-.84.07l-5.09-.03c-.43 0-.64 0-.83-.09-.2-.08-.35-.23-.65-.53l-3.58-3.63c-.3-.3-.45-.46-.53-.65-.08-.2-.07-.4-.07-.84l.03-5.09c0-.43 0-.64.09-.83.08-.2.23-.35.53-.65l3.63-3.58c.3-.3.46-.45.65-.53.2-.08.4-.07.84-.07z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}
