# PMT Observation Report Q2 OND'25

## Airtel Bharti PMT Observation Report - React Form Application

A comprehensive React-based form application for filling out Airtel Bharti PMT (Performance Monitoring Tool) Observation Reports.

## Features

- Multi-tab form interface (Attempted & Conveyance)
- Dynamic form fields with validation
- File upload functionality (max 10MB)
- Radio buttons, checkboxes, and dropdown selections
- Responsive design for all devices
- Clean and modern UI with Tailwind styling
- Real-time form state management
- Form submission and clearing functionality

## Tech Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.15.0
- **UI Components**: React Select 5.7.0
- **HTTP Client**: Axios 1.4.0
- **Build Tool**: Create React App
- **Deployment**: Netlify

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/pmt-airtel-observation.git
cd pmt-airtel-observation
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Project Structure

```
pmt-airtel-observation/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── pages/
│   │   ├── MainPage.jsx
│   │   └── AttemptedPage.jsx
│   ├── styles/
│   │   ├── index.css
│   │   └── form.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── netlify.toml
└── README.md
```

## Deployment to Netlify

### Method 1: Direct Netlify Deployment

1. Go to [Netlify](https://netlify.com)
2. Sign in with GitHub account
3. Click "New site from Git"
4. Select your GitHub repository
5. Netlify auto-detects build settings
6. Click "Deploy site"

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `build`
- **Node version**: 18.x

## Form Fields Overview

### Main Section
- Email input (required)
- PMT Complete Time
- PMT Complete Date (required)
- Total Nodes
- Engineer Name (required)
- Host Name (required)

### CRQ Information
- CRQ number
- CRQ Create Date
- Work Area
- Final Tier
- Team Leader
- Engineer Number
- Product Name
- City, State, Region
- TNG Circle
- Address

### Device Inspection
- Installation location (SHELTER/REG/MSC/BSC/ODC)
- Rack mounting status
- Device dust level
- On-site dust level
- Rust status
- Backspace availability
- Rail-kit availability
- Device and fan cleaning
- Air filter status

### Environmental Conditions
- Site temperature (dropdown)
- AC count
- AC not working count
- Main door status
- Deep cleaning requirements
- Cable dressing status
- Alarm module status

### Observations & Notes
- File upload for photos/reports
- Final observation checkboxes
- Other issues text field

### Site Person Details
- Person type (ISP/NMT/Local/Technician/Security Guard)
- Contact name
- Contact number
- Signature availability

## Form Validation

The form validates the following required fields before submission:
- Email (valid email format)
- PMT Date (required)
- Engineer Name (required)
- Host Name (required)

## File Upload Specifications

- **Accepted formats**: PDF, JPG, JPEG, PNG, ZIP
- **Max file size**: 10 MB
- **Recommended size**: 2-5 MB

## Environment Variables

None required for basic functionality. To add API integration, create a `.env` file:

```
REACT_APP_API_URL=your_api_endpoint
REACT_APP_API_KEY=your_api_key
```

## API Integration

To integrate with a backend API, modify the form submission in the main form component:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + '/submit-form',
      formData
    );
    console.log('Form submitted:', response.data);
    setSuccessMessage('Form submitted successfully!');
  } catch (error) {
    console.error('Submission error:', error);
  }
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Responsive Design

The application is fully responsive with breakpoints at:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Performance

- Lightweight bundle size
- Optimized CSS with minification
- Efficient React rendering with hooks
- Fast form state management

## Security

- Client-side form validation
- HTTPS enforced on Netlify
- No sensitive data stored in localStorage
- CORS configured on backend (when added)

## Troubleshooting

### Port 3000 already in use
```bash
npm start -- --port 3001
```

### Dependencies installation issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
npm run build -- --verbose
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project for any purpose.

## Support

For support, email contact@example.com or open an issue on GitHub.

## Version

**Current Version**: 2.0.0

## Changelog

### Version 2.0.0
- Complete React rewrite
- Improved UI/UX
- Added responsive design
- Enhanced form validation
- Better state management

## Author

- **Original Creator**: Mohd Sarim
- **Contact**: sarimmohd22@gmail.com
- **Website**: [PMT Observation Report](https://pmt-airtel-observation-v2.netlify.app)

---

**Created with ❤️ for Airtel Bharti**
