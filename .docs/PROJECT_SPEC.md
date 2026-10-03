# Elegentoo Artistry Demo V1 — Project Specification

## 1. Objective

Build a polished, mobile-first prototype for a luxury makeup artist business to validate client interest. The demo should show how Instagram traffic can become qualified booking enquiries and how the artist can manage those leads.

The V1 scope comprises the public website, booking enquiry flow, WhatsApp confirmation, and mini artist dashboard. Database, authentication, and payments are strictly out of scope.

## 2. Product definition

**Product:** Elegentoo Artistry Demo V1  
**Product type:** Mobile-first public website, booking enquiry experience, and mini artist dashboard for a professional makeup artist.

The product demonstrates a connected client-to-artist journey: a prospective client discovers and evaluates the artist, submits a booking enquiry, receives a confirmation with a pre-filled WhatsApp action, and the artist views and acts on the enquiry in a lightweight dashboard.

This is a booking enquiry experience. Submission requests availability; it does not reserve or confirm a booking.

## 3. Users

### Prospective client — primary user

A visitor, including one arriving from Instagram, who wants to understand the artist's offering and submit a booking enquiry. They can review the public website, follow the booking flow, check their details, submit the enquiry, and continue to WhatsApp from the confirmation screen.

### Artist — secondary user

The artist who needs to see new enquiries, inspect their details, and trigger Accept, Reject, or WhatsApp actions in the mini dashboard.

## 4. Core user journeys

### Client journey

**Discover → Evaluate → Enquire → Review → Submit → Confirm → Continue on WhatsApp**

The prospective client reaches the public website, reviews its service and trust-building content, starts a booking enquiry, completes each step, reviews the entered details, submits, and sees confirmation with a WhatsApp action.

### Artist journey

**Open dashboard → View enquiries → Open enquiry details → Accept / Reject / WhatsApp**

The artist uses the mini dashboard to see mock enquiries, inspect a booking detail view, and trigger the available actions.

## 5. In-scope features

### Public website

The MVP public website includes:

- Hero
- About
- Services and pricing
- Portfolio
- Testimonials
- Travel banner
- Footer call to action
- Booking call to action

These sections are content locations only. Actual services, prices, artist biography, travel policy, portfolio assets, and testimonials have not been provided and must not be fabricated in this specification or represented as verified business facts.

### Booking enquiry flow

The multi-step booking enquiry follows this exact sequence:

1. Service
2. Date / Location
3. Contact
4. Review
5. Submit

The flow collects information needed for an enquiry, presents the entered information for review, and submits the request. This is an enquiry, not an automatically confirmed or reserved booking.

### Confirmation and WhatsApp behavior

After submission, show a confirmation screen. It must provide a pre-filled WhatsApp action that carries enquiry information into the message. The client initiates that WhatsApp action; this is not automated messaging. The confirmation communicates receipt of an enquiry, not booking confirmation or guaranteed availability.

### Mini artist dashboard

Provide a read-only dashboard view showing new enquiries and a booking detail view. Provide Accept, Reject, and WhatsApp action triggers. Accept/Reject behavior is represented using local state for the demo; it does not create a persistent booking-management system.

## 6. Demo and mock-state boundaries

The prototype demonstrates the user experience and interactions with mock enquiries and local state. Dashboard records and Accept/Reject state are demo state, not durable records. No availability engine or booking reservation is implied by the enquiry flow. The WhatsApp action is a user-triggered, pre-filled handoff, not an automated message.

**Demo constraint — content integrity:** Until verified business content is supplied, do not invent actual services, prices, travel policy, artist biography, testimonials, or portfolio content. Leave these as content inputs/placeholders rather than presenting invented details as facts.

**Demo constraint — implementation boundary:** Keep the demo at the frontend and mock-state level described in the Phase 0 conversation. This is a scope constraint for the prototype, not an additional claim made by the blueprint.

## 7. Explicitly out of scope

### Blueprint exclusions

- Real payment processing, including Stripe or Razorpay
- Database integration, ORM, or database persistence
- User accounts or authentication
- Automated email or SMS gateways
- Calendar synchronization

### Additional demo constraints established in the Phase 0 conversation

The following are additional demo constraints, not source claims from the blueprint:

- Admin authentication and customer or artist accounts
- A real availability engine or booking lock/reservation
- A notifications system
- An analytics platform
- Multi-artist management
- Coupons or discounts
- A review submission system
- Payment checkout

## 8. Product-level success criteria

The demo succeeds at the product level when a prospective client can understand, without needing a narrated explanation:

1. What Elegentoo Artistry is
2. What services it offers, once verified content is supplied
3. How to discover and evaluate the artist through the site
4. How to submit a booking enquiry
5. How WhatsApp fits into the enquiry handoff
6. How the artist views and acts on enquiries

These are demo success outcomes established in the Phase 0 conversation; they do not assert any unprovided business facts.

## 9. Formal Definition of Done

The V1 prototype is done when all of the following are true, as specified by the blueprint:

- The complete flow can be completed without assistance on a 375px mobile viewport.
- Empty, loading, and responsive layout states are not broken.
- Independent code and UX review has passed.

## 10. Phase 0 exit criteria

The blueprint defines Phase 0 deliverables as a draft of `.docs/PROJECT_SPEC.md` and initialization of `.docs/TASKS.md`. Its exit gate is that every task in `TASKS.md` has clear, testable acceptance criteria.

For this specification, Phase 0 product scope is considered defined when the objective, users, journeys, included and excluded scope, prototype boundaries, success outcomes, and completion criteria above are recorded. The formal blueprint phase exit additionally requires an initialized task backlog whose every task has clear, testable acceptance criteria.

## 11. Content inputs still needed

The following business content remains to be supplied before it can be represented as fact in the public demo:

- Actual services and pricing
- Artist biography and positioning
- Service area and travel policy
- Portfolio content
- Testimonials