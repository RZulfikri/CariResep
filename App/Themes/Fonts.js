const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic',

  asapBold: 'Asap-Bold',
  asapBoldItalic: 'Asap-BoldItalic',
  asapItalic: 'Asap-Italic',
  asapMedium: 'Asap-Medium',
  asapMediumItalic: 'Asap-MediumItalic',
  asapRegular: 'Asap-Regular',
  asapSemiBold: 'Asap-SemiBold',
  asapSemiBoldItalic: 'Asap-SemiBoldItalic'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 16,
  medium: 15,
  small: 13,
  tiny: 11,

  headerTitle1: 25,
  headerTitle2: 20,
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style
}
