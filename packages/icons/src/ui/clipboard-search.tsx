import type { Icon } from './types'

export const IconClipboardSearch: Icon = ({
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
      data-slot='icon-ui-clipboard-search'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M5.6 3.66a2.1 2.1 0 0 0-2.1 2.1v8.52c0 3.77 0 5.66 1.18 6.83 1.17 1.17 3.06 1.17 6.83 1.17h6.36a2.63 2.63 0 0 0 2.62-2.63l-2.26 1.13-3.47-1.83v-3.28l3.47-1.7 2.26 1.4v-9.6c0-1.16-.95-2.11-2.12-2.11h-.55c-.59 0-1.11.38-1.3.94-.17.51-.62.88-1.15.94l-2.52.28-.41.04a4 4 0 0 1-1.28-.13l-2.98-.64c-.4-.08-.73-.34-.92-.7-.23-.45-.7-.73-1.2-.73z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M16.67 3.66c0-1.07-.87-1.94-1.94-1.94H9.27c-1.07 0-1.94.87-1.94 1.94v0c0 1.06.87 1.93 1.94 1.93h5.46c1.07 0 1.94-.87 1.94-1.93'
        stroke='currentColor'
      />
      <path d='m20.14 19.8 1.88 1.86' stroke='currentColor' />
      <path d='M21.04 17.31a3.2 3.2 0 1 0-6.4 0 3.2 3.2 0 0 0 6.4 0' stroke='currentColor' />
      <path
        d='M13.15 22.28h-1.64c-3.77 0-5.66 0-6.83-1.17S3.5 18.05 3.5 14.28V6.94a3.3 3.3 0 0 1 3.28-3.28'
        stroke='currentColor'
      />
      <path d='M20.5 11.28v-4.7a3 3 0 0 0-2.93-2.92h-.17' stroke='currentColor' />
    </svg>
  )
}
