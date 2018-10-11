<?php include("related-posts.php"); ?>

</div>

    <div class="side-pane">
        <button id="app-controls-toggle" type="button"><i class="fa fa-gear"></i></button>
        <div id="app-controls">
            <button class="font-btn" id="font-subtract">A</button>
            <button class="font-btn" id="font-add">A</button>
            <button type="button" class="col-2" id="reset-btn">
                <i class="fa fa-refresh"></i>
                Restore Default</button>
            <button type="button" class="col-2" id="toggle-mode-btn">
                <span id="night-mode-text">
                    <i class="fa fa-moon-o"></i> Night Mode
                </span>
                <span id="day-mode-text">
                    <i class="fa fa-sun-o"></i> Day Mode
                </span>
            </button>
        </div>
    </div>

    <?php include("scripts.php"); ?>
</body>
</html>