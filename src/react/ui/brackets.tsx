import type { Icon } from './types'

export const IconBrackets: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='brackets'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.903 20.219c-1.009 0-1.513 0-1.906-.178a2 2 0 0 1-.998-.998c-.178-.393-.178-.897-.178-1.906v-2.762a2 2 0 0 0-1.42-1.904l-.038-.011a.5.5 0 0 1 0-.956l.037-.011a2 2 0 0 0 1.421-1.905V6.863c0-1.009 0-1.513.178-1.906a2 2 0 0 1 .998-.998c.393-.178.897-.178 1.906-.178m6.194 16.438c1.008 0 1.513 0 1.906-.178a2 2 0 0 0 .998-.998c.178-.393.178-.897.178-1.906v-2.762a2 2 0 0 1 1.42-1.904l.038-.011a.5.5 0 0 0 0-.956l-.037-.011a2 2 0 0 1-1.421-1.905V6.863c0-1.009 0-1.513-.178-1.906a2 2 0 0 0-.998-.998c-.393-.178-.898-.178-1.906-.178'
      />
    </svg>
  )
}
