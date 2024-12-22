Name : Sujit Singh


# 🌟 Movie Projects

## 🎯 Objective  
Build a full-stack app for **Movie Projects** with:  
- **Frontend**: React.js (CRUD, Authentication, Responsive UI)  
- **Backend**: Node.js, Express, MongoDB (JWT & bcrypt for Auth)  

---

## 🚀 Features  

### **Frontend (React.js)**  
1. **Authentication**: Login & Registration with JWT (stored in localStorage).  
2. **Movies**:  
   - Add/Edit/Delete (Auth required).  
   - View all movies (Title, Genre, Director, Year, Description).  
3. **UI**: Responsive design with **CSS/Bootstrap**.  

### **Backend (Node.js, Express, MongoDB)**  
1. **Auth**:  
   - `POST /auth/register`: Register users (bcrypt).  
   - `POST /auth/login`: Generate JWT.  
2. **Movies**:  
   - `GET /movies`: Fetch all movies.  
   - `POST /movies`: Add a movie (Auth).  
   - `PUT /movies/:id`: Update movie (Auth).  
   - `DELETE /movies/:id`: Delete movie (Auth).  
3. **Models**:  
   - **User**: Username, Email, Password (hashed), Role.  
   - **Movie**: Title, Genre, Director, Year, Description.  

---

## 🗂️ Folder Structure  

### Backend  
- `controllers/`: Auth & Movie logic.  
- `models/`: Movie/User schemas.  
- `routes/`: Auth & Movie routes.  
- `middleware/`: JWT validation.  

### Frontend  
- `components/`: Login, Register, MovieList, MovieForm, MovieDetails.  
- `App.js`: Routing.  

---

## 🔗 GitHub Submission  
Include both **frontend** and **backend** with a **README**.  

---

### 📝 Evaluation  
- Functionality (30%) ✅  
- Code Structure (25%) 📁  
- UI/UX (20%) 🎨  
- DB Integration (15%) 📊  
- Bonus (10%): Search, Pagination, Redux.  

**Deadline**: Add your due date here.  
Happy Coding! 🚀  
