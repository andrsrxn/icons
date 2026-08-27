import type { Icon } from './types'

export const IconCubeVertex: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-cube-vertex'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m12 11.7-2.19-1.27M3.2 9.47v-.8c0-1.13 0-1.69.26-2.15.27-.47.75-.75 1.73-1.31l.53-.3m-2.52 8.8v.8c0 1.13 0 1.69.26 2.15.27.47.75.75 1.73 1.31l.53.3m15.08-8.8v-.8c0-1.13 0-1.69-.26-2.15-.27-.47-.75-.75-1.73-1.31l-.53-.3m-3.67-.94-.7-.4c-.97-.56-1.46-.84-2-.84-.53 0-1.02.28-2 .84l-.52.3m5.22 16.31-.7.4c-.97.57-1.46.85-2 .85-.53 0-1.02-.28-2-.85l-.52-.3m11.41-6.57v.8c0 1.13 0 1.69-.26 2.15-.27.47-.75.75-1.73 1.31l-.53.3M6.06 8.17l-2.44-1.4m2.44 8.17-2.44 1.4m14.32-8.17 2.44-1.4m-2.44 8.17 2.44 1.4M12 11.7l2.19-1.27M12 14v-2.3m0-5.77V3.1m0 17.78v-2.82'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
