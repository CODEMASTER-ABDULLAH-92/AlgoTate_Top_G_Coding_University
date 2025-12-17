# DevMastery Pro - Premium Courses Platform

A modern, responsive web application for showcasing and managing premium programming courses.

## 🚀 Features

### Core Functionality
- **Premium Courses Catalog** - Browse all available premium courses
- **Advanced Filtering** - Filter by category, level, and search
- **Course Details** - Comprehensive course information with pricing
- **Responsive Design** - Mobile-first approach for all devices

### Course Management
- Course categories: JavaScript, React, TypeScript, Node.js, Full Stack, Python
- Skill levels: Beginner, Intermediate, Advanced
- Featured courses highlighting
- Real-time search and sorting

### User Experience
- Glassmorphism UI design
- Smooth animations and transitions
- Professional course cards with detailed information
- Clear pricing and discount displays

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Icons**: Lucide React
- **Styling**: Custom CSS with gradient backgrounds
- **State Management**: React Hooks (useState)

## 📁 Project Structure

```
src/
├── app/
│   ├── premium-courses/
│   │   └── page.jsx          # Premium courses main page
│   └── javascript-tutorials/
│       └── page.jsx          # Free tutorials with premium sidebar
├── components/
│   ├── FeaturedCourseCard.jsx # Featured course component
│   └── CourseCard.jsx        # Regular course card component
└── lib/
    └── data.js               # Course data and constants
```

## 🎯 Course Features

Each premium course includes:
- Lifetime access to content
- Downloadable resources
- Certificate of completion
- Real-world projects
- Instructor support
- Community access

## 💰 Pricing Structure

- **Individual Courses**: $74.99 - $119.99
- **Bundle Packages**: Available
- **Subscription**: Monthly/Yearly plans
- **Enterprise**: Custom pricing for teams

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/devmastery-pro.git
cd devmastery-pro
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages

### Premium Courses (`/premium-courses`)
- Main catalog of all premium courses
- Advanced filtering and search
- Featured courses section
- Course benefits showcase

### JavaScript Tutorials (`/javascript-tutorials`) 
- Free YouTube tutorials
- Premium courses sidebar
- Skill-based progression

## 🎨 Design System

### Colors
- Primary: Purple (#8B5CF6) to Pink (#EC4899) gradients
- Background: Gray-900 to Black gradient
- Text: White with gray variants
- Accents: Green (success), Yellow (warning), Red (danger)

### Components
- Glassmorphism cards with backdrop blur
- Gradient borders and backgrounds
- Hover animations and scale transforms
- Responsive grid layouts

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_APP_URL=your-app-url
NEXT_PUBLIC_STRIPE_KEY=your-stripe-key
```

### Course Data Structure
```javascript
{
  id: number,
  title: string,
  description: string,
  level: "Beginner" | "Intermediate" | "Advanced",
  duration: string,
  students: string,
  rating: string,
  price: string,
  originalPrice: string,
  discount: string,
  image: string (emoji),
  category: string,
  featured: boolean,
  lessons: number,
  projects: number,
  certificate: boolean,
  instructor: {
    name: string,
    role: string
  },
  whatYouLearn: string[]
}
```

## 📈 Future Enhancements

- [ ] User authentication system
- [ ] Payment integration (Stripe)
- [ ] Course progress tracking
- [ ] Video streaming platform
- [ ] Student dashboard
- [ ] Admin panel for course management
- [ ] Review and rating system
- [ ] Course completion certificates

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🆘 Support

For support, email support@devmastery.pro or join our Slack community.

## 🙏 Acknowledgments

- Icons by Lucide React
- Design inspiration from modern SaaS platforms
- Course content from industry experts

---

**Built with ❤️ by the DevMastery Pro Team**
