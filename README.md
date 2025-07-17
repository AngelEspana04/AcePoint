MANURSING ISLAND CLUB
LESSON AND BILLING SOFTWARE

BY ANGEL ESPAÑA DEL RIO
07/03/2025

Features: 
-	Court sheet layout, from 6am to 9pm on a 30mins time slot, with 12 different courts.(HIGH PRIORITY)
-	Add lesson form, which allows the pro to input a lesson (member_name, pro_name, duration and time).  (HIGH PRIORITY)
    o	Prevent overlap from double booking the same pro at the same time, with the option of modifying and moving pros around if needed. 
    o	Every pro has to type the name of the member and click to confirm. 
    o	For billing, each pro will be linked to a specific rate, which would be charged ro every member after the lesson is marked as done, with a “security message” to confirm that the lesson has been completed and ready to be charged.  
-	Add reservation, for regular member reservations. 
    o	Members can see the lessons, but specific information is hidden, so they can only see the availability of the courts. (MEDIUM PRIORITY)
-	Show the lesson form in the calendar in different colors with the pro name, so everyone can different themselves better, as well as the regular reservations. (HIGH PRIORITY)
-	Done/Cancel button for the lessons, as well as a remove or add button for group clinics. 
    o	FUTURE: we can add a way where members can enter the clinics by their own and cancel by their own. If the cancel within 24hrs, the cancellation police can come in play and not allow them to cancel. (HIGH PRIORITY)
-	Different logins for admins and pros, and for members. (LOW PRIORITY)
-	Local storage for now, but database in the future. (LOW PRIORITY)
-	Emails and text reminders for lessons and upcoming events. (LOW PRIORITY)
-	Able to charge apparel, grips, restrings, racquets or any other product that the club offers different from the lessons. (LOW PRIORITY.
-	Form of cancelling, deleting, and confirming lessons, which will be in the future linked to the billing of the lessons directly to the members account. 
-	FUTURE: can work as the hours schedule for the pros and to get paid. Much easier for organization. 

SPRINT 1:

| ✅Court sheet layout: Grid from 6am–9pm in 30-min intervals for 12 courts 
| ✅Add lesson form: Input: member name, pro name, duration, and time    
| ✅Display lesson blocks: Visualize lessons in the court sheet by pro         
| ✅Show color-coded blocks: Each pro shows up with a different color    
	      *Uppercase and lowercase sensibility in the code        
| ✅Prevent pro double-booking: Don’t allow the same pro to be booked twice         
| ✅Simple in-memory state: Store lessons temporarily in local state            

SPRINT 2: 

| ✅ “Done” / “Cancel” buttons                | Confirm or cancel lessons from the calendar    
| ✅Confirm billing with prompt               | Show a confirmation when marking "Done"        
| Track lesson status                         | (Scheduled, Done, Cancelled)                   
| Link pros to billing rate                   | Assign each pro a fixed rate                   
| Record billing info (in state).             | Store billing entry when lesson is marked done 
| Add/edit/removal logic                      | Allow editing or removing lessons  

SPRINT 3:

| Member reservations                         | Add simple “reserved” blocks (with no pro assigned)            
| Hide lesson details from members            | Only show time availability on member view                     
| Group clinic lessons                        | Show blocks for group clinics                                  
| Add/remove users from clinics               | Admin can assign members to group clinics                    
| 🔜 (future) Member joins/cancels clinic     | Basic backend logic for user interaction (optional early prep)

SPRINT 4:

| Pro/admin/member roles                      | Different views + access levels               
| Login system (basic)                        | Local auth, ready to expand to Firebase later 
| Display limited views                       | Members see availability only                 
| Admin can modify all                        | Admin has full editing and billing access 

SPRINT 5:

| Local storage                               | Store lessons persistently across refreshes    
| Prep for database                           | Clean data models for Firebase or Supabase     
| Email/text reminders                        | Framework ready (via button or cron trigger)   
| Track custom charges.                       | Add non-lesson charges (gear, stringing, etc.) 


Problems this solves:
1.	Time and headaches when having to bill one member at a time every week, and having problems with pros because not understanding what they did. This forces the pros to keep track of their lessons 
