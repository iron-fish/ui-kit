import bemClassName from 'bem-classname'

export const bem = baseName => bemClassName.bind(null, baseName)
