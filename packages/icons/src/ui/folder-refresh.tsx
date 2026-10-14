import type { Icon } from './types'

export const IconFolderRefresh: Icon = ({
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
      data-slot='icon-ui-folder-refresh'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.47 20.18h.35a3 3 0 0 1 1.3.38l.29.18.4.24a3 3 0 0 0 1.7.34l.45-.07.4-.07.27-.05a3 3 0 0 0 1.28-.64l.21-.19c.16-.14.23-.2.3-.28a3 3 0 0 0 .81-1.86V12.9c0-2.82 0-4.24-.87-5.12-.88-.88-2.3-.88-5.12-.88h-1.6c-1.1 0-1.64 0-2.14-.18-.5-.19-.92-.54-1.75-1.25l-.4-.34c-.84-.71-1.26-1.06-1.76-1.25S7.54 3.7 6.45 3.7H5.4c-.67 0-1 0-1.28.05a3 3 0 0 0-2.39 2.39c-.05.27-.05.6-.05 1.27v6.76c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88z'
        fill='currentColor'
      />
      <path
        d='M22.24 9.89a3 3 0 0 0-3-3q0 0 0 0h-5.05c-1.04 0-1.56 0-2.05-.17l-.2-.08c-.48-.2-.86-.56-1.62-1.27S9.17 4.29 8.7 4.09L8.5 4c-.48-.16-1-.16-2.05-.16h-2.2A2.57 2.57 0 0 0 1.67 6.4v7.77c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h2.79'
        stroke='currentColor'
      />
      <path
        d='M21.77 15.87c-.93-1.32-2.05-2.22-3.64-2.22q-2.38 0-3.48 2.06'
        stroke='currentColor'
      />
      <path d='M14.85 19.2c.93 1.3 2.04 2.22 3.63 2.22q2.38 0 3.48-2.07' stroke='currentColor' />
      <path
        d='m22.28 13.48-.04.82c-.06.94-.08 1.42-.4 1.7-.3.27-.77.24-1.72.18l-.82-.04'
        stroke='currentColor'
      />
      <path
        d='m14.31 21.44.05-.68c.06-.94.09-1.41.4-1.69.31-.27.78-.24 1.72-.18l.68.05'
        stroke='currentColor'
      />
    </svg>
  )
}
