import type { Icon } from './types'

export const IconFileVolume: Icon = ({
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
      data-slot='icon-ui-file-volume'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.78 22.26c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.05-1.18-6.83v-4.5c0-3.74 0-5.61 1.16-6.78S7.97 1.8 11.7 1.75l1.7-.01v6.8h6.78v3.47l.03 7.67a2.6 2.6 0 0 1-2.58 2.58v-6.64l-.94-1.57-2.13 1.83c-.41.35-.93.56-1.47.6l-.7.06a1.8 1.8 0 0 0 .13 3.61h1.4l1.9 2.11z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M20.18 12v-.88c0-1.66 0-2.5-.32-3.24-.31-.75-.9-1.33-2.1-2.49l-.58-.56-.84-.84c-.97-.97-1.45-1.45-2.05-1.75l-.47-.19c-.62-.21-1.3-.21-2.68-.21-3.15 0-4.72 0-5.8.83a4 4 0 0 0-.72.72c-.84 1.08-.84 2.65-.84 5.8v8.36c0 .66 0 1 .04 1.27a4 4 0 0 0 3.4 3.4c.28.04.61.04 1.28.04'
        stroke='currentColor'
      />
      <path
        d='M13.2 2.35v2.46c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.46'
        stroke='currentColor'
      />
      <path d='M13.98 16.37v4.04' stroke='currentColor' />
      <path
        d='M13.93 16.37h-1.37 0c-.95 0-1.42 0-1.71.3-.3.28-.3.76-.3 1.71s0 1.43.3 1.72.76.3 1.7.3h1.38'
        stroke='currentColor'
      />
      <path
        d='m13.73 16.38.6-.5c1.41-1.15 2.12-1.73 2.7-1.46.56.27.56 1.18.56 3.01v1.94c0 1.88 0 2.82-.58 3.08s-1.3-.34-2.72-1.56l-.56-.49'
        stroke='currentColor'
      />
      <path d='M20.29 20.77c.28-.38.62-1.37.62-2.3a4.4 4.4 0 0 0-.62-2.3' stroke='currentColor' />
    </svg>
  )
}
