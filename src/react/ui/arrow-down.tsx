import type { Icon } from './types'

export const IconArrowDown: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='arrow-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M18.966 14.54a.75.75 0 0 0-1.062-1.06l.531.53.531.53Zm-4.131 3.077.53.53-.53-.53Zm-5.66.003-.53.53.53-.53Zm-3.08-4.14a.75.75 0 0 0-1.06 1.06l.53-.53.53-.53Zm5.911 6.142v.75-.75Zm-.006 0-.003.75.003-.75ZM12.75 4.6a.75.75 0 0 0-1.5 0h1.5Zm5.685 9.41-.53-.53-3.6 3.608.53.53.53.53 3.601-3.608-.53-.53Zm-9.26 3.61.53-.53-3.61-3.61-.53.53-.53.53 3.61 3.61.53-.53Zm5.66-.003-.53-.53c-.682.683-1.141 1.141-1.53 1.438-.37.283-.585.347-.77.347l.001.75v.75c.645 0 1.177-.27 1.68-.656.487-.372 1.028-.916 1.68-1.569l-.531-.53Zm-5.66.003-.53.53c.65.651 1.191 1.194 1.677 1.565.502.384 1.033.654 1.675.657l.003-.75.003-.75c-.184-.001-.4-.066-.77-.349-.388-.296-.847-.753-1.527-1.433l-.53.53ZM12 19.622l-.002.75h.008v-1.5h-.004l-.002.75Zm0 0h.75V4.6h-1.5v15.022H12Z'
      />
    </svg>
  )
}
