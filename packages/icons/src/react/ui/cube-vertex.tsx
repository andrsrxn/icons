import type { Icon } from './types'

export const IconCubeVertex: Icon = ({
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
      data-slot='icon-ui-cube-vertex'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='m12 11.65-2.42-1.4' stroke='currentColor' />
      <path
        d='M2.25 9.19V8.06c0-1.13 0-1.7.26-2.16.27-.46.76-.74 1.74-1.3l.8-.47'
        stroke='currentColor'
      />
      <path
        d='M2.25 13.89v1.13c0 1.12 0 1.69.26 2.15.27.47.76.75 1.74 1.31l.8.46'
        stroke='currentColor'
      />
      <path
        d='M21.75 9.19V8.06c0-1.13 0-1.7-.26-2.16-.27-.46-.76-.74-1.74-1.3l-.8-.47'
        stroke='currentColor'
      />
      <path
        d='m14.89 3.1-.98-.56c-.98-.57-1.47-.85-2-.85-.54 0-1.03.28-2 .85L9.1 3'
        stroke='currentColor'
      />
      <path
        d='m14.89 21.05-.98.57c-.98.56-1.47.84-2 .84-.54 0-1.03-.28-2-.84l-.8-.46'
        stroke='currentColor'
      />
      <path
        d='M21.75 13.89v1.13c0 1.12 0 1.69-.26 2.15-.27.47-.76.75-1.74 1.31l-.8.46'
        stroke='currentColor'
      />
      <path d='M5.43 7.75 2.73 6.2' stroke='currentColor' />
      <path d='m5.43 15.24-2.7 1.56' stroke='currentColor' />
      <path d='m18.57 7.75 2.7-1.56' stroke='currentColor' />
      <path d='m18.57 15.24 2.7 1.56' stroke='currentColor' />
      <path d='m12 11.65 2.42-1.4' stroke='currentColor' />
      <path d='M12 14.2v-2.55' stroke='currentColor' />
      <path d='M12 5.27V2.15' stroke='currentColor' />
      <path d='M12 21.82v-3.11' stroke='currentColor' />
    </svg>
  )
}
