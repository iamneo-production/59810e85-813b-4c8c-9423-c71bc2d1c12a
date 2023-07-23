package com.example.springapp.model;





import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table
public class User {
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;
		private String email;
		private String password;
		private String role;
		
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public User(long id, String email, String password) {
			super();
			this.id = id;
			this.email = email;
			this.password = password;
			
		}
		public User(String role) {
			super();
			this.role = role;
		}
		public User() {
			super();
		}
		@Override
		public String toString() {
			return "User [id=" + id + ", email=" + email + ", password=" + password + "]";
		}
		
		public void setRole(String role) {
			this.role = role;
		}
		public String getRole() {
			return role;
		}
		public static Object withEmail(String email) {
		
			return withEmail(email);
		}
		public static Object password(String password) {
			
			return password(password);
		}
        public static Object role(String role) {
			
			return role(role);
        }
		public User(String password, String role) {
			super();
			this.password = password;
			this.role = role;
		}
	}
// Aishwarya R



