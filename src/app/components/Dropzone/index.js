import DropzoneTitle from './DropzoneTitle';
import DropzoneSubtitle from './DropzoneSubtitle';

const DropzoneStyles = {
  dropzone: {
    display: 'flex',
    height: '336px',
    borderWidth: '2px',
    borderColor: '#b8bfda',
    borderStyle: 'dashed',
    borderRadius: '3px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    // borderColor: 'rgba(244, 254, 255, 0.36)',
    background: '#d8ddef'
  },
  reject: {
  	borderColor: 'rgba(255, 37, 37, 0.4)',
  	background: 'rgba(218, 67, 67, 0.14)'
  }
};

export { DropzoneTitle, DropzoneSubtitle, DropzoneStyles }