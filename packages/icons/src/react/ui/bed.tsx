import type { Icon } from './types'

export const IconBed: Icon = ({
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
      data-slot='icon-ui-bed'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' fill='currentColor' d='M2.21 13.08h19.55v5.34H2.21z' />
      <path
        opacity='.2'
        d='m3.3 5.16 8.68-1.55 8.68 1.55v7.5H17.5l-.47-2.34-3.22.06v2.29h-3.45v-2.29h-3.3l-.52 2.29H3.3z'
        fill='currentColor'
      />
      <path
        d='M22.3 20.4v-1.32c0-2.83 0-4.24-.88-5.12-.87-.88-2.29-.88-5.12-.88H7.7c-2.83 0-4.25 0-5.12.88s-.88 2.3-.88 5.12v1.31'
        stroke='currentColor'
      />
      <path d='M22.26 18.42H1.7' stroke='currentColor' />
      <path
        d='M20.66 13.08v-2.8c0-2.36 0-3.53-.68-4.36s-1.83-1.06-4.13-1.53l-2.68-.54c-.6-.12-.9-.18-1.2-.18s-.59.06-1.18.18l-2.68.54c-2.3.47-3.46.7-4.13 1.53-.68.83-.68 2-.68 4.35v2.81'
        stroke='currentColor'
      />
      <path
        d='M10.64 12.67v-.88c0-.94 0-1.42-.29-1.7-.3-.3-.76-.3-1.7-.3h-.32c-.95 0-1.42 0-1.71.3-.3.28-.3.76-.3 1.7v.88'
        stroke='currentColor'
      />
      <path
        d='M17.54 12.67v-.88c0-.94 0-1.42-.29-1.7-.3-.3-.76-.3-1.7-.3h-.18c-.95 0-1.42 0-1.71.3-.3.28-.3.76-.3 1.7v.88'
        stroke='currentColor'
      />
    </svg>
  )
}
