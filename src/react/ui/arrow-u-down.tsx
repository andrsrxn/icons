import type { Icon } from './types'

export const IconArrowUDown: Icon = ({
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
      data-slot='arrow-u-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M12.205 16.953a.75.75 0 0 0-1.062 1.06l.531-.53.531-.53Zm.3 1.363.53-.53-.53.53Zm5.66.003-.53-.53.53.53Zm1.365-.305a.75.75 0 0 0-1.06-1.061l.53.53.53.53Zm-4.152-9.978h.75-.75Zm-8.726 0h-.75.75Zm-.75 10.045a.75.75 0 0 0 1.5 0h-1.5Zm5.113-14.408v.75-.75Zm.66 13.81-.532.53.831.832.531-.53.53-.53-.83-.832-.53.53Zm6.49.835.53.53.835-.834-.53-.53-.53-.531-.836.835.53.53Zm-5.66-.002-.53.53c.655.657 1.206 1.202 1.706 1.576.513.385 1.054.655 1.697.655v-1.5c-.187 0-.415-.068-.798-.355-.396-.297-.867-.757-1.544-1.436l-.531.53Zm5.66.003-.53-.53c-.689.687-1.136 1.145-1.517 1.445-.36.283-.562.343-.74.343v1.5c.65 0 1.175-.277 1.668-.664.47-.371 1.003-.918 1.649-1.564l-.53-.53Zm-2.787 2.008h.75V8.036h-1.5v12.291h.75ZM6.652 8.036h-.75V18.08h1.5V8.036h-.75Zm4.363-4.363v-.75a5.113 5.113 0 0 0-5.113 5.113h1.5a3.613 3.613 0 0 1 3.613-3.613v-.75Zm4.363 4.363h.75a5.113 5.113 0 0 0-5.113-5.113v1.5a3.613 3.613 0 0 1 3.613 3.613h.75Z'
      />
    </svg>
  )
}
