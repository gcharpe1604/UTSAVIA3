document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const role = params.get('role');

    const forms = {
        college: {
            form: document.getElementById('college-form'),
            title: 'Complete Your College Profile'
        },
        student: {
            form: document.getElementById('student-form'),
            title: 'Complete Your Student Profile'
        },
        sponsor: {
            form: document.getElementById('sponsor-form'),
            title: 'Complete Your Sponsor Profile'
        }
    };

    const profileTitle = document.getElementById('profile-title');

    // Hide all forms initially
    Object.values(forms).forEach(({ form }) => {
        if (form) form.classList.add('hidden');
    });

    // Show the correct form based on the role
    if (role && forms[role]) {
        forms[role].form.classList.remove('hidden');
        profileTitle.textContent = forms[role].title;
    } else {
        // Default to college form if no role is specified
        forms.college.form.classList.remove('hidden');
        profileTitle.textContent = forms.college.title;
    }

    // Handle back button clicks
    document.querySelectorAll('.btn-back').forEach(button => {
        button.addEventListener('click', () => {
            window.history.back();
        });
    });

    // Restrict budget input to numbers only
    const budgetInput = document.getElementById('sponsor-budget');
    if (budgetInput) {
        budgetInput.addEventListener('input', function (e) {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }
});
