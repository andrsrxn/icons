import type { Icon } from './types'

export const IconFirstAid: Icon = ({
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
      data-slot='icon-ui-first-aid'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.84 18.46v-.87c0-.94 0-1.41.29-1.7.3-.3.76-.3 1.7-.3h.64c1.65 0 2.48 0 3.04-.46l.26-.26c.46-.56.46-1.39.46-3.04s0-2.49-.46-3.04l-.26-.26c-.56-.47-1.39-.47-3.04-.47h-.63c-.95 0-1.42 0-1.71-.29-.3-.3-.3-.76-.3-1.7v-.44c0-1.73 0-2.6-.5-3.16l-.17-.18c-.57-.5-1.43-.5-3.16-.5s-2.6 0-3.16.5l-.18.18c-.5.57-.5 1.43-.5 3.16v.43c0 .95 0 1.42-.29 1.71-.3.3-.76.3-1.7.3h-.64c-1.65 0-2.48 0-3.04.46l-.26.26c-.46.55-.46 1.38-.46 3.04 0 1.65 0 2.48.46 3.04l.26.26c.56.46 1.39.46 3.04.46h.63c.95 0 1.42 0 1.71.3.3.29.3.76.3 1.7v.87c0 1.73 0 2.6.5 3.16l.17.18c.57.5 1.43.5 3.16.5s2.6 0 3.16-.5l.18-.18c.5-.57.5-1.43.5-3.16'
        fill='currentColor'
      />
      <path
        d='M15.84 18.46v-.87c0-.94 0-1.41.29-1.7.3-.3.76-.3 1.7-.3h.64c1.65 0 2.48 0 3.04-.46l.26-.26c.46-.56.46-1.39.46-3.04s0-2.49-.46-3.04l-.26-.27c-.56-.46-1.39-.46-3.04-.46h-.63c-.95 0-1.42 0-1.71-.29-.3-.3-.3-.76-.3-1.7v-.44c0-1.73 0-2.6-.5-3.16l-.17-.18c-.57-.5-1.43-.5-3.16-.5s-2.6 0-3.16.5l-.18.18c-.5.57-.5 1.43-.5 3.16v.43c0 .95 0 1.42-.29 1.71-.3.3-.76.3-1.7.3h-.64c-1.65 0-2.48 0-3.04.45l-.26.27c-.46.55-.46 1.38-.46 3.04 0 1.65 0 2.48.46 3.04l.26.26c.56.46 1.39.46 3.04.46h.63c.95 0 1.42 0 1.71.3.3.29.3.76.3 1.7v.87c0 1.73 0 2.6.5 3.16l.17.18c.57.5 1.43.5 3.16.5s2.6 0 3.16-.5l.18-.18c.5-.57.5-1.43.5-3.16'
        stroke='currentColor'
      />
    </svg>
  )
}
