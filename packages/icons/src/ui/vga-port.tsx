import type { Icon } from './types'

export const IconVgaPort: Icon = ({
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
      data-slot='icon-ui-vga-port'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M5.63 11.65c-.5-2.25-.76-3.37-.16-4.12s1.76-.75 4.06-.75h4.94c2.3 0 3.46 0 4.06.75s.35 1.87-.16 4.12l-.79 3.53-.09.34a2 2 0 0 1-.37.68c-.05.07-.12.13-.24.26l-.37.34a2 2 0 0 1-.99.4c-.12.02-.24.02-.5.02H9.08c-.36 0-.54 0-.7-.02a2 2 0 0 1-1.02-.5 4 4 0 0 1-.88-1.3l-.08-.32z'
        fill='currentColor'
      />
      <path
        d='M12 17.22h-1.09c-1.9 0-2.86 0-3.55-.54s-.9-1.48-1.32-3.34l-.1-.45c-.65-2.82-.97-4.23-.22-5.18s2.2-.94 5.09-.94h2.4c2.89 0 4.33 0 5.08.94s.44 2.35-.2 5.16l-.1.46c-.42 1.86-.64 2.8-1.32 3.35-.68.54-1.64.54-3.56.54z'
        stroke='currentColor'
      />
      <path
        d='M8.81 10.17a.4.4 0 1 1-.78 0 .4.4 0 0 1 .78 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.25 13.82a.4.4 0 1 1-.79 0 .4.4 0 0 1 .79 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.47 10.17a.4.4 0 1 1-.79 0 .4.4 0 0 1 .79 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.51 13.82a.4.4 0 1 1-.78 0 .4.4 0 0 1 .78 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M15.97 10.17a.4.4 0 1 1-.78 0 .4.4 0 0 1 .78 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M22.5 12a.73.73 0 1 1-1.45 0 .73.73 0 0 1 1.46 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M2.95 12a.73.73 0 1 1-1.46 0 .73.73 0 0 1 1.46 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
