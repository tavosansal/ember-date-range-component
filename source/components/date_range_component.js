App.DateRangeComponent = Ember.Component.extend({
    startDate: null,
    endDate: null,

    didInsertElement: function() {
        var startInput = this.$('#start-picker');
        startInput.datepicker({
            todayBtn: 'linked',
            todayHighlight: true,
            autoclose: true
        });

        var endInput = this.$('#end-picker');
        endInput.datepicker({
            todayBtn: 'linked',
            todayHighlight: true,
            autoclose: true
        });

        //Allows the calendar icon to be clicked
        this.$('.input-group-addon').click(function() {
            $(this).prev().datepicker('show');
        });
    },

    changedStartDate: function() {
        var start = new Date(this.get('startDate'));
        var end = new Date(this.get('endDate'));
        var input = $('#end-picker');

        //If the new start date is greater than the endDate
        //we need to clead the property and the value of the endDate
        if (start > end) {
            this.set('endDate', '');
            input.val('');
        }

        input.datepicker('remove');
        input.datepicker({
            startDate: start,
            todayBtn: 'linked',
            todayHighlight: true,
            autoclose: true
        });
    }.observes('startDate')
});