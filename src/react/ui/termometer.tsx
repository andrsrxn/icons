import type { Icon } from '../types'

export const IconTermometer: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='termometer'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M9.627 5.984v7.938a3.806 3.806 0 1 0 4.745 0V5.984c0-.319 0-.478-.017-.612A2.03 2.03 0 0 0 12.61 3.63c-.133-.018-.293-.018-.611-.018-.319 0-.478 0-.611.018a2.03 2.03 0 0 0-1.744 1.743c-.018.134-.018.293-.018.612Z'
        opacity='.2'
      />
      <path fill='currentColor' d='M12.694 16.898a.695.695 0 1 1-1.389 0 .695.695 0 0 1 1.39 0Z' />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12 17.593a.695.695 0 1 0 0-1.39.695.695 0 0 0 0 1.39Z'
        clipRule='evenodd'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12.694 16.898a.695.695 0 1 1-1.389 0 .695.695 0 0 1 1.39 0Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M9.627 5.984v7.938a3.806 3.806 0 1 0 4.745 0V5.984c0-.319 0-.478-.017-.612A2.03 2.03 0 0 0 12.61 3.63c-.133-.018-.293-.018-.611-.018-.319 0-.478 0-.611.018a2.03 2.03 0 0 0-1.744 1.743c-.018.134-.018.293-.018.612Zm3.067 10.914a.695.695 0 1 1-1.389 0 .695.695 0 0 1 1.39 0Z'
      />
    </svg>
  )
}
