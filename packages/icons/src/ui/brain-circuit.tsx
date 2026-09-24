import type { Icon } from './types'

export const IconBrainCircuit: Icon = ({
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
      data-slot='icon-ui-brain-circuit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m10.39 2.52 1.02.59a2 2 0 0 1 1.02 1.74v14.08a2 2 0 0 1-.9 1.66l-1.03.69a2 2 0 0 1-2.47-.2L6.5 19.64a2 2 0 0 0-.72-.43l-.9-.3a2 2 0 0 1-1.34-1.67l-.24-2.12a2 2 0 0 0-.24-.76l-.86-1.52a2 2 0 0 1 0-1.98l.86-1.49a2 2 0 0 0 .25-.75l.24-1.96a2 2 0 0 1 1.1-1.55l1.33-.66a2 2 0 0 0 .38-.25l1.77-1.48a2 2 0 0 1 2.27-.2'
        fill='currentColor'
      />
      <circle opacity='.2' cx='19.79' cy='4.02' r='1.68' fill='currentColor' />
      <circle opacity='.2' cx='19.79' cy='19.89' r='1.68' fill='currentColor' />
      <circle opacity='.2' cx='20.69' cy='11.83' r='1.68' fill='currentColor' />
      <path
        d='M12.43 4.94A3 3 0 0 0 9.46 1.9 3 3 0 0 0 6.5 4.94c0 .72.24 1.38.64 1.9'
        stroke='currentColor'
      />
      <path d='M6.5 13.1c0-1.39 1.08-2.5 2.42-2.5' stroke='currentColor' />
      <path
        d='M12.43 18.75a3 3 0 0 1-2.97 3.06 3 3 0 0 1-2.96-3.06c0-.72.24-1.38.64-1.9'
        stroke='currentColor'
      />
      <path
        d='M5.98 4.58a2.87 2.87 0 0 0-2.82 2.9q.01.81.37 1.46a2.9 2.9 0 0 0-1.77 2.7c0 1.3.84 2.42 1.99 2.78q-.57.76-.59 1.78c0 1.6 1.26 2.91 2.82 2.91'
        stroke='currentColor'
      />
      <path d='M12.43 19.11V4.58' stroke='currentColor' />
      <path d='M18.3 12.08h-5.87' stroke='currentColor' />
      <path
        d='m18.44 5.24-.31.44c-.88 1.23-1.32 1.84-1.97 2.18-.64.33-1.4.33-2.91.33h-.75'
        stroke='currentColor'
      />
      <path
        d='m18.37 18.34-.24-.34c-.88-1.24-1.32-1.85-1.97-2.19s-1.4-.33-2.92-.33h-.74'
        stroke='currentColor'
      />
      <circle cx='19.79' cy='4.02' r='1.68' stroke='currentColor' />
      <circle cx='19.79' cy='19.89' r='1.68' stroke='currentColor' />
      <circle cx='20.69' cy='11.83' r='1.68' stroke='currentColor' />
    </svg>
  )
}
