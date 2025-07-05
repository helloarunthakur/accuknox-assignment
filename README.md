# Frontend Trainee Assignment – Dynamic Dashboard

This project is a dynamic dashboard application built as part of the Frontend Trainee assessment.

## 📋 Assignment Requirements

The application allows users to dynamically add, remove, and manage widgets within categorized sections.

### Key Features

- 📁 JSON-based structure for dashboard layout.
- ➕ Add new widgets dynamically with a form (name, text).
- ❌ Remove widgets from a category via a cross icon or uncheck via category section.
- 🔍 Search functionality to filter all widgets.
- 🧱 Uses local store management (Redux)
- ⚙ Built with React NextJS.

---

## 🧑‍💻 Tech Stack

- **Framework**: NextJS
- **State Management**: Redux Toolkit
- **Styling**: CSS / Tailwind
- **Language**: JavaScript

---

## 📥 Clone & Start Guide

Follow these steps to run the project locally on your system.

### 🔧 Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or later)
- **npm** or **yarn**

---

### 🚀 Steps to Run the Project

#### 1. Clone the Repository

```bash
git clone https://github.com/helloarunthakur/accuknox-assignment.git
cd accuknox-dashboard-nextjs
```

## 🧪 Features Overview

### 1. JSON-Driven UI

Widgets and categories are populated based on a JSON structure like:

```json
{
  "categories": [
    {
      "name": "CSPM Executive Dashboard",
      "widgets": [
        {
          "name": "Widget 1",
          "text": "Random Text Content"
        }
      ]
    }
  ]
}
```
