import type { Icon } from './types'

export const IconWarehouseBoxes: Icon = ({
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
      data-slot='icon-ui-warehouse-boxes'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M18.84 21.55v-6.77c0-1.88 0-2.82-.58-3.41-.59-.59-1.53-.59-3.42-.59H9.15c-1.89 0-2.83 0-3.41.59s-.59 1.53-.59 3.41v6.77'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M1.8 18.87c-.03.57-.04.86.08 1.09l.1.17c.17.2.44.31.97.52 1.02.4 1.53.61 1.92.43a1 1 0 0 0 .27-.18c.31-.3.31-.85.31-1.95v-5.72c0-.85 0-1.27.26-1.56.25-.28.67-.33 1.51-.42l4.59-.53.23-.02.22.02 4.63.53c.84.1 1.26.14 1.52.43.25.28.25.7.25 1.55V19c0 1.05 0 1.58.29 1.87q.14.14.33.23c.38.15.87-.05 1.85-.44.49-.2.74-.3.9-.5l.14-.2c.1-.23.1-.5.07-1.03l-.35-9.1c-.02-.49-.03-.73-.14-.94s-.31-.34-.7-.62l-7.87-5.51c-.55-.4-.83-.59-1.14-.59-.32 0-.6.2-1.15.59l-7.86 5.5c-.4.28-.6.42-.71.62s-.12.45-.14.93z'
        fill='currentColor'
      />
      <path
        d='M5.12 21.55c-.36 0-.53 0-.68-.02a3 3 0 0 1-2.69-2.68l-.01-.69v-5.92c0-1.43 0-2.14.3-2.76s.86-1.06 1.98-1.95l4.26-3.37c1.78-1.4 2.67-2.11 3.72-2.11 1.04 0 1.93.7 3.72 2.11l4.26 3.37c1.12.89 1.68 1.33 1.98 1.95s.3 1.33.3 2.76v5.95c0 .33 0 .5-.02.63a3 3 0 0 1-2.7 2.71c-.14.02-.3.02-.64.02'
        stroke='currentColor'
      />
      <rect x='7.91' y='17.56' width='4.08' height='4.08' rx='1' stroke='currentColor' />
      <rect x='12' y='17.56' width='4.08' height='4.08' rx='1' stroke='currentColor' />
      <rect x='9.95' y='13.47' width='4.08' height='4.08' rx='1' stroke='currentColor' />
      <rect opacity='.2' x='7.75' y='17.56' width='4.25' height='4.25' rx='1' fill='currentColor' />
      <rect
        opacity='.2'
        x='12.01'
        y='17.48'
        width='4.25'
        height='4.25'
        rx='1'
        fill='currentColor'
      />
      <rect opacity='.2' x='9.95' y='13.31' width='4.25' height='4.25' rx='1' fill='currentColor' />
    </svg>
  )
}
